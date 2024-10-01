```java
package com.kgisl.sbngnested;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
// @Table(name = "Cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartid;
    private String name;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    // @JoinColumn(name = "cartid")
    @JsonIgnoreProperties("cart")
    private List<Item> items;

    // Add a setter method for the items list to properly associate the Cart with
    // Items
    public void setItems(List<Item> items) {
        this.items = items;
        for (Item item : items) {
            item.setCart(this); // Associate the Cart with each Item
        }
    }

    
}

```

```java
package com.kgisl.sbngnested;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
// @Table(name = "Item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itemid;
    private String serialNumber;

    // @ManyToOne(cascade = CascadeType.ALL)
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "cartid", referencedColumnName = "cartid")
    @JsonIgnoreProperties("items")
    private Cart cart;

}
```